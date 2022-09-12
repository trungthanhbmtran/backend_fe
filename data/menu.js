import FolderIcon from '@mui/icons-material/Folder';

export const menu = [
  {
    title: "Trang Chủ",
    path: "/"
  },
  {
    title: "Giới thiệu",
    path: "/aboutus"
  },
  {
    title: "Dịch vụ - Sản phẩm",
    items: [
      {
        title: "Dịch vụ",
        items: [
          {
            title: "Dịch vụ điện",
            path: "/thedowtheory"
          },
          {
            title: "Dịch vụ Thử nghiệm",
            path: "/chart"
          },
          {
            title: "Dịch vụ CNTT",
            path: "/chart"
          },
        ]
      },
      {
        title: "Sản phẩm",
        items: [
          {
            title: "Sản phẩm điện",
            path: "/thedowtheory"
          },
          {
            title: "Charts & Chart Patterns",
            path: "/chart"
          },
          {
            title: "Trend & Trend Lines",
            path: "/trendlines"
          },
          {
            title: "Support & Resistance",
            path: "/sandr"
          }
        ]
      },
    ]
  },
  {
    title: "Tài liệu",
    items: [
      {
        title: "Điện",
        icon : <FolderIcon/>,
        items: [
          {
            title: "Tài liệu điện 1 ",
            path: "/thedowtheory",
            icon : <FolderIcon/>
          },
          {
            title: "CT",
            path: "/chart",
            icon : <FolderIcon/>
          },
          {
            title: "Tài liệu điện 2",
            path: "/trendlines",
            icon : <FolderIcon/>

          },
          {
            title: "Tài liệu điện 3",
            path: "/sandr",
            icon : <FolderIcon />

          }
        ]
      },
      {
        title: "CNTT",
        icon : <FolderIcon/>,
        items: [
          {
            title: "Tài liệu CNTT 1",
            icon : <FolderIcon/>,
            path: "/thedowtheory"
          },
          {
            title: "Tài liệu CNTT 2",
            icon : <FolderIcon/>,
            path: "/chart"
          },
          {
            title: "Tài liệu CNTT3",
            icon : <FolderIcon/>,
            path: "/trendlines"
          }
        ]
      },
    ]
  },
  {
    title: "Tin tức - Tuyển dụng",
    path :'/news'
  },
  {
    title: "Liên hệ",
    path :'/contact'
  }
];
