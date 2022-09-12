import Layout from '../components/Layout'
import Banner from '../components/layoutpage/banner'
import TabsComponent from '../components/layoutpage/tabscomponent'

// const ArrayTabs = [
//     {id:0, label: 'Tin Tức ETC',component : <ContentPage/>},
//     {id:1, label: 'Tin Điện',component : <New/>},
//     {id:2, label: 'Tin tuyển dụng',component : <New/>}
// ]

import {NewsData} from '../data/newsdata'

const News = () => {
  return (
       <Layout>
          {/* <Banner path="/images/news/etc/congnhandienlucthanhhoacuunguoi.jpg" title="Công nhân Điện lực cứu người bị tai nạn giao thông" description="Theo đó, vào khoảng 7h30 phút ngày 21-7, các anh Trần Văn Đài, Lê Hưng Giang và Tào Văn Hạnh là công nhân Điện lực Như Thanh đang trên đường thực hiện nhiệm vụ, khi đi qua Khu phố 1, thị trấn Bến Sung (Như Thanh) thì gặp một phụ nữ đi xe máy không may bị ngã. Sau cú ngã, nạn nhân bị xe máy đè lên, mặt bị xây xát và chảy nhiều máu."/> */}
          <TabsComponent ArrayTabs={NewsData}/>
       </Layout>
        // <Maybienthe/>
        // <Link  href="/post/abc/232132">
        //     <a>First comment</a>
        //   </Link>
  )
}

export default News