import About from "../components/AboutUs/About";
// import Organization from "../components/aboutus/organizational";
import ActionAreaCard from "../components/indexs/card";
import Commit from "../components/indexs/commit";
import Event from "../components/indexs/event";
import SlideImages from "../components/indexs/SlideImages";
import WorkDone from "../components/indexs/workdone";

export const slideData = [
    // { id: 0, tittle: 'VỀ CHÚNG TÔI', path: './aboutus', component: <SlideImages/> },
    { id: 1, tittle: 'VỀ CHÚNG TÔI', path: './aboutus', component: <About /> },
    // { id: 1, tittle: 'LĨNH VỰC HOẠT ĐỘNG', path: './aboutus', component: <ActionAreaCard/> },
    { id: 2, tittle: 'Tuyên Ngôn Doanh Nghiệp', path: './aboutus', component: <Commit/> },
    { id: 3, tittle: 'TIN TỨC NỔI BẬT', path: './news', component: <Event /> },
    { id: 4, tittle: 'MỘT SỐ DỰ ÁN ĐÃ TRIỂN KHAI THỬ NGHIỆM & LẮP ĐẶT', path: './aboutus', component: <ActionAreaCard/> }
  ];