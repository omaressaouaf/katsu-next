const Topbar = () => {
  return (
    <section id="topbar" className="d-flex align-items-center fixed-top topbar-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
        <div style={{ marginRight: "10px" }}>
          <i className="fa fa-phone-alt"></i> <span>0520 106 140 / 0614 598 949</span>
        </div>
        <div className="d-none d-lg-block">
          <i className="fa fa-clock"></i> <span>Lun-Dim: 12:00 AM - 11:00 PM</span>
        </div>
      </div>
    </section>
  )
};

export default Topbar;
