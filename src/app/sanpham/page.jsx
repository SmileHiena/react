'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from './Products.module.css'; // Điều chỉnh đường dẫn nếu cần

export default function Products() {
  const [data, setData] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products", {
      cache: 'no-store'
    });
    const newData = await res.json();
    setData(newData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
      });
      const result = await res.json();
      if (result.message) {
        fetchProducts(); 
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className="card">
        <h2 className="text-center">Quản lý sản phẩm</h2>
        <Link className="btn btn-primary" href="/sanpham/them" style={{width: "200px", marginLeft: "20px"}}>Thêm sản phẩm</Link>
        <div className="card-header">
          <div className="card-title">Bordered Table</div>
        </div>
        <div className="card-sub">
          <table className="table table-bordered" striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={`http://localhost:3000/images/${product.image}`} width='100px' height='100px' />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td style={{width: '200px'}}>
                    <Link className="btn btn-primary mx-2" href={`/sanpham/sua/${product.id}`}>Sửa</Link>
                    <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Xóa</button>
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
