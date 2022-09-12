import { useRouter } from 'next/router'
// import Maybienthe from '../../components/newscomponent/ETC/1'
// import Maybienthe2 from '../../components/newscomponent/ETC/2'
import {NewsData} from '../../data/newsdata'
import dynamic from 'next/dynamic'

// const DataPost = [
//   {id : 1 , title : 'Văn hoá doanh nghiệp việt nam',component :    <Maybienthe/>},
//   {id : 2 , title : 'Sử dụng thiết bị ra sao',component :    <Maybienthe2/>},
//   {id : 3 , title : 'Triển khai dự án',component :    <Maybienthe2/>},
//   {id : 4 , title : 'Thành đang test',component :    <Maybienthe/>},
// ]


const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  console.log('router.query',slug)
  // console.log('router.query',slug.at(0),slug.at(1))

  // console.log('router.query111', DataPost.find(x => x.title === `${slug.at(0).toString()}`))
  // console.log('render', DataPost.reduce((t, v) => v.title === `${slug.at(0).toString()}` ? [...t, v.component] : t, []))

  // DataPost.find(x => x.title === slug.at(0)).map(e => {e.component}) 


  const DynamicHeader = dynamic(() => import(`../../components/newscomponent/${slug.at(0)}/${slug.at(1)}`))

  return (
      // <DynamicHeader/>
    //   DataPost.reduce((t, v) => v.title = slug.at(0) ? [...t, v.component] : t, [])    // Object.keys(DataPost.find(x => x.title === slug.at(0))).map(
    //   e => {e.component}
    // )
    <DynamicHeader/>
    // NewsData.reduce((t, v) => v.title === `${slug.at(0).toString()}` ? [...t, v.component] : t, [])
  )
}

export default Post