"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../Categories.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Tên danh mục không được bỏ trống'),
  image: Yup.mixed().required('Hình ảnh là bắt buộc'),
});

export default function AddCategory() {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const data = new FormData();
    Object.keys(values).forEach((key) => {
      data.append(key, values[key]);
    });

    const res = await fetch('http://localhost:3000/categories', {
      method: 'POST',
      body: data,
    });
    const result = await res.json();
    if (result.error) {
      alert(result.error);
    } else {
      alert("Thêm thành công");
      router.push('/danhmuc');
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className={styles.container}>
      <h2>Thêm danh mục</h2>
      <Formik
        initialValues={{ name: '', image: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form enctype="multipart/form-data">
            <div className="form-group my-2">
              <label className='form-label'>Tên danh mục</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" />
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
            <button type="submit" className="btn btn-primary my-3" disabled={isSubmitting}>
              Thêm danh mục
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
