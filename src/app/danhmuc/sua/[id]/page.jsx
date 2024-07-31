'use client'; 
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import styles from '../../Categories.module.css';

export default function EditCategory({ params }) {
  const router = useRouter();
  const id = params.id;
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`http://localhost:3000/categories/${id}`);
      const data = await res.json();
      setCategory(data);
      setValue('name', data.name);
    };
    if (id) {
      getCategory();
    }
  }, [id, setValue]);
    
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    const res = await fetch(`http://localhost:3000/categories/${id}`, {
      method: 'PUT',
      body: formData,
    });
    const result = await res.json();
    if (!result.error) {
      router.push('/danhmuc');
    } else {
      // Handle errors
      console.error(result.error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Chỉnh sửa danh mục</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-group my-2">
          <label className='form-label'>Tên danh mục</label>
          <input type="text" className="form-control" {...register('name', { required: 'Tên danh mục là bắt buộc' })} />
          {errors.name && <div className="text-danger">{errors.name.message}</div>}
        </div>
        <div className="form-group my-2">
          <label className='form-label'>Hình ảnh</label>
          {category?.image && (
            <>
              <br />
              <img src={`http://localhost:3000/img/${category.image}`} width='200px' alt="Category Image" />
            </>
          )}
          <input type="file" className="form-control" {...register('image')} />
        </div>
        <button type="submit" className="btn btn-primary my-3">Cập nhật danh mục</button>
      </form>
    </div>
  );
}
