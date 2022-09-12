import AboutUs from "../components/AboutUs"
import Organization from "../components/aboutus/organizational"
import Vision from "../components/aboutus/vision"
import Layout from "../components/Layout"
import Banner from "../components/layoutpage/banner"
import TabsComponent from "../components/layoutpage/tabscomponent"


const ArrayTabs = [
    {
        id: 0,
        title: 'Giới thiệu',
        tillebaner: "Công nhân Điện lực cứu người bị tai nạn giao thông",
        description: "Theo đó, vào khoảng 7h30 phút ngày 21-7, các anh Trần Văn Đài, Lê Hưng Giang và Tào Văn Hạnh là công nhân Điện lực Như Thanh đang trên đường thực hiện nhiệm vụ, khi đi qua Khu phố 1, thị trấn Bến Sung (Như Thanh) thì gặp một phụ nữ đi xe máy không may bị ngã. Sau cú ngã, nạn nhân bị xe máy đè lên, mặt bị xây xát và chảy nhiều máu.",
        imagePath: "/images/news/etc/congnhandienlucthanhhoacuunguoi.jpg", 
        component: <AboutUs />
    },
    {
        id: 1,
        title: 'Sơ đồ tổ chức',
        tillebaner: "Bộ trưởng Bộ Thông tin và Truyền thông Nguyễn Mạnh Hùng đã có bài phát biểu tại Hội nghị chuyển đổi số ngành Ngân hàng",
        description: "Ngành Ngân hàng đã đi đầu về ứng dụng công nghệ thông tin (CNTT). Sự đi đầu này vừa có nguyên nhân khách quan là áp lực hội nhập quốc tế vừa có nguyên nhân chủ quan là sự vào cuộc mạnh mẽ của lãnh đạo ngành Ngân hàng.",
        imagePath: "/images/news/IT/20220812-bt2.jpg",
        component: <Organization />
    },
    {
        id: 2,
        title: 'Tầm nhìn – Sứ mạnh – Giá trị cốt lõi',
        tillebaner: "Cơ hội việc làm tại VNETC",
        description: "Công việc hấp dẫn mức thu nhập cao",
        imagePath: "/images/news/hmr/1605689787-banner-tuyen-dung-4.jpg",
        component: <Vision />
    }
]

const aboutUs = () => {
    return (
        <Layout>
            <TabsComponent page='about' ArrayTabs={ArrayTabs} />
        </Layout>

    )
}

export default aboutUs