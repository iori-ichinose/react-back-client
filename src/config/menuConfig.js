import {
  AppstoreOutlined, AreaChartOutlined, BarChartOutlined,
  HomeOutlined, LineChartOutlined,
  NotificationOutlined, PieChartOutlined,
  ToolOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons';

const menuList = [
  {
    title: '首页',
    key: 'item-home',
    icon: HomeOutlined,
    link: '/home'
  },
  {
    title: '商品',
    key: 'item-product',
    icon: AppstoreOutlined,
    children: [
      {
        title: '品类管理',
        key: 'man-category',
        icon: UnorderedListOutlined,
        link: '/category'
      },
      {
        title: '商品管理',
        key: 'man-product',
        icon: ToolOutlined,
        link: '/product',
      }
    ]
  },
  {
    title: '用户管理',
    key: 'item-user',
    icon: UserOutlined,
    link: '/user'
  },
  {
    title: '角色管理',
    key: 'item-role',
    icon: NotificationOutlined,
    link: '/role'
  },
  {
    title: '图形图表',
    key: 'item-charts',
    icon: AreaChartOutlined,
    children: [
      {
        title: '条形图',
        key: 'sub-bar',
        icon: BarChartOutlined,
        link: '/charts/bar'
      },
      {
        title: '折线图',
        key: 'sub-line',
        icon: LineChartOutlined,
        link: '/charts/line'
      },
      {
        title: '饼图',
        key: 'sub-pie',
        icon: PieChartOutlined,
        link: '/charts/pie'
      }
    ]
  }
];

export const mapping = new Map();
const getItems = (menu) => {
  for (const node of menu) {
    if (!node.children) {
      mapping.set(node.link, node.key);
    } else {
      getItems(node.children);
    }
  }
};

getItems(menuList);

export default menuList;
