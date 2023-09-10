import type { VerticalNavItems } from "@/@layouts/types";
import dashBoard from '../../assets/images/svg/dashboard.svg'

export default [
  {
    title: "sidebar.dashboard",
    to: { name: "dashboard" },
    icon: { icon: h('img', { src: dashBoard, style: 'height: 20px; width: 20px;' }) },
    accessBy: ['employee', 'member', 'Acc-admin']
  },
] as unknown as VerticalNavItems;
