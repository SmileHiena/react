"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../Products.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Tên sẩn phẩm không được bỏ trống'),
  price: Yup.number().required('Giá sản phẩm phải là bắt buộc'),
  description: Yup.string().required('Mô tả sản phẩm phải là bắt buộc'),
  categoryId: Yup.string(),
  image: Yup.mixed().required('Hình ảnh là bắt buộc'),
});

export default function AddProduct() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch('http://localhost:3000/categories');
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const data = new FormData();
    Object.keys(values).forEach((key) => {
      data.append(key, values[key]);
    });
    
    const res = await fetch('http://localhost:3000/addproduct', {
      method: 'POST',
      body: data,
    });
    const result = await res.json();
    if (result.error) {
      alert(result.error);
    } else {
      alert(result.message);
      router.push('/sanpham');
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h2>Thêm sản phẩm</h2>
      <Formik
        initialValues={{ name: '', price: '', description: '', categoryId: '', image: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form enctype="multipart/form-data">
        <div className="form-group my-2">
          <label className='form-label'>Tên sản phẩm</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" />
        </div>
        <div className="form-group my-2">
          <label className='form-label'>Giá</label>
              <Field type="number" name="price" className="form-control" />
              <ErrorMessage name="price" component="div" />
        </div>
        <div className="form-group my-2">
          <label className='form-label'>Mô tả</label>
              <Field as="textarea" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" />
        </div>
        <div className="form-group my-2">
          <label className='form-label'>Hình ảnh</label>
          <input
                id="file"
                name="file"
            type="file"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
            className="form-control"
          />
              <ErrorMessage name="image" component="div" />
        </div>
        <div className="form-group my-2">
          <label className='form-label'>Danh mục</label>
              <Field as="select" name="categoryId" className='form-control'>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
              </Field>
              <ErrorMessage name="categoryId" component="div" />
        </div>
            <button type="submit" className="btn btn-primary my-3" disabled={isSubmitting}>
              Thêm sản phẩm
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
