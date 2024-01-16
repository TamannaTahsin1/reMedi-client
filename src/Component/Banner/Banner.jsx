
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// images
import banner1 from '../../assets/img/ban1.png'
const Banner = () => {
    return (
        <div className='my-10'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl ' alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner1} className='w-full h-[70vh] rounded-xl ' alt="" />
        </SwiperSlide>


      </Swiper>
        </div>
    );
};

export default Banner;