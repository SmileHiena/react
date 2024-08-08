'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from './Categories.module.css'; // Adjust the path if needed

export default function Categories() {
  const [data, setData] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch("mongodb+srv://thanhtnps35091:thanhngoc123456@cluster0.oqosth4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/categories", {
      cache: 'no-store'
    });
    const newData = await res.json();
    setData(newData);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa danh mục này không?')) {
      const res = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'DELETE',
      });
      const result = await res.json();
      if (result.message) {
        fetchCategories(); 
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className="card">
        <h2 className="text-center">Quản lý danh mục</h2>
        <Link className="btn btn-primary" href="/danhmuc/them" style={{width: "200px", marginLeft: "20px"}}>Thêm danh mục</Link>
        <div className="card-header">
          <div className="card-title">Bảng danh mục</div>
        </div>
        <div className="card-sub">
          <table className="table table-bordered" striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên danh mục</th>
                <th>Hình Ảnh</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <img src={`http://localhost:3000/images/${category.image}`} width='100px' height='100px' />
                  </td>
                  <td style={{width: '200px'}}>
                    <Link className="btn btn-primary mx-2" href={`/danhmuc/sua/${category.id}`}>Sửa</Link>
                    <button className="btn btn-danger" onClick={() => deleteCategory(category.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
