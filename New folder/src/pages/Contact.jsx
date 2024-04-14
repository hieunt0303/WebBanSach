import React from "react";
import { Link, useNavigate } from "react-router-dom";



const Contact = () => {
    return(
        <>
       
       <div className="container-fluid contact py-5">
  <div className="container py-5">
    <div className="p-5 bg-light rounded">
      <div className="row g-4">
        <div className="col-12">
          <div className="text-center mx-auto" style={{maxWidth: 700}}>
            <h1 className="text-primary">Liện hệ với chúng tôi</h1>
            <p className="mb-4">Biểu mẫu liên hệ hiện không hoạt động. Nhận biểu mẫu liên hệ chức năng và làm việc với Ajax &amp; PHP trong vài phút. Chỉ cần sao chép và dán các tệp, thêm một chút mã và bạn đã hoàn tất. <a href="https://htmlcodex.com/contact-form">Tải xuống đây</a>.</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="h-100 rounded">
            <iframe className="rounded w-100" style={{height: 400}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31346.675175427183!2d106.7667278873347!3d10.862150701782202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d88215693361%3A0x95009cc1803a7e51!2zTGluaCBUcnVuZywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1641470485107!5m2!1svi!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="col-lg-7">
          <form action className>
            <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Tên của bạn" />
            <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Email" />
            <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Lời nhắn" defaultValue={""} />
            <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Gửi</button>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="d-flex p-4 rounded mb-4 bg-white">
            <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
            <div>
              <h4>Địa Chỉ</h4>
              <p className="mb-2">Khu phố 6, Phường Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh</p>
            </div>
          </div>
          <div className="d-flex p-4 rounded mb-4 bg-white">
            <i className="fas fa-envelope fa-2x text-primary me-4" />
            <div>
              <h4>Mail</h4>
              <p className="mb-2">NLU@gmail.com</p>
            </div>
          </div>
          <div className="d-flex p-4 rounded bg-white">
            <i className="fa fa-phone-alt fa-2x text-primary me-4" />
            <div>
              <h4>Số Điện Thoại</h4>
              <p className="mb-2">(+012) 3456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

         
     </>


    );
};
export default Contact;