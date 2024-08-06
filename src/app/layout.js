"use client";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <>
      <html>
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Kaiadmin - Bootstrap 5 Admin Dashboard</title>
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
        <link rel="icon" href="assets1/img/kaiadmin/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="assets1/css/fonts.min.css" />
        <link rel="stylesheet" href="assets1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets1/css/plugins.min.css" />
        <link rel="stylesheet" href="assets1/css/kaiadmin.min.css" />
        <link rel="stylesheet" href="assets1/css/demo.css" />
        </head>
      <body>
        <div className="wrapper">
          <div className="sidebar" data-background-color="dark">
            <div className="sidebar-logo">
              <div className="logo-header" data-background-color="dark">
                <a href="/" className="logo">
                  <img
                    src="assets1/img/kaiadmin/logo_light.svg"
                    alt="navbar brand"
                    className="navbar-brand"
                    height="20"
                  />
                </a>
                <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right"></i>
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left"></i>
                  </button>
                </div>
                <button className="topbar-toggler more">
                  <i className="gg-more-vertical-alt"></i>
                </button>
              </div>
            </div>
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
              <div className="sidebar-content">
                <ul className="nav nav-secondary">
                  <li className="nav-item active"></li>
                  <li className="nav-item">
                    <a data-bs-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                      <i className="fas fa-home"></i>
                      <p>Dashboard</p>
                      <span className="caret"></span>
                    </a>
                    <div className="collapse" id="dashboard">
                      <ul className="nav nav-collapse">
                        <li>
                          <a href="/">
                            <span className="sub-item">Dashboard 1</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-section">
                    <span className="sidebar-mini-icon">
                      <i className="fa fa-ellipsis-h"></i>
                    </span>
                    <h4 className="text-section">Components</h4>
                  </li>
                  <li className="nav-item">
                    <a data-bs-toggle="collapse" href="#Sanpham">
                      <i className="far fa-chart-bar"></i>
                      <p>Quản lý</p>
                      <span className="caret"></span>
                    </a>
                    <div className="collapse" id="Sanpham">
                      <ul className="nav nav-collapse">
                        <li>
                          <a href="https://react-sand-six.vercel.app/sanpham">
                            <span className="sub-item">Sản phẩm</span>
                          </a>
                        </li>
                        <li>
                          <a href="https://react-sand-six.vercel.app/danhmuc">
                            <span className="sub-item">Danh mục</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        </body>
        <script src="assets1/js/core/jquery-3.7.1.min.js"></script>
        <script src="assets1/js/core/popper.min.js"></script>
        <script src="assets1/js/core/bootstrap.min.js"></script>
        <script src="assets1/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"></script>
        <script src="assets1/js/plugin/chart.js/chart.min.js"></script>
        <script src="assets1/js/plugin/jquery.sparkline/jquery.sparkline.min.js"></script>
        <script src="assets1/js/plugin/chart-circle/circles.min.js"></script>
        <script src="assets1/js/plugin/datatables/datatables.min.js"></script>
        <script src="assets1/js/plugin/bootstrap-notify/bootstrap-notify.min.js"></script>
        <script src="assets1/js/plugin/jsvectormap/jsvectormap.min.js"></script>
        <script src="assets1/js/plugin/jsvectormap/world.js"></script>
        <script src="assets1/js/plugin/sweetalert/sweetalert.min.js"></script>
        <script src="assets1/js/kaiadmin.min.js"></script>
        <script src="assets1/js/setting-demo.js"></script>
        <script src="assets1/js/demo.js"></script>
      </html>
    </>
  );
}
