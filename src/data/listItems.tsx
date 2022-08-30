import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import WatchIcon from '@mui/icons-material/Watch';
import { ElementType } from 'react';

export interface menutItemsProps {
  ident: string;
  link?: string;
  name: string;
  Icon?: ElementType;
  access: string;
  disabled: boolean;
  items?: menutItemsProps[];
}

export const menutItems: menutItemsProps[] = [
  {
    ident: 'home',
    link: '/',
    name: 'Home',
    Icon: BarChartIcon,
    access: 'all',
    disabled: false,
  },
  {
    ident: 'dashboard',
    // link: '/dashboard',
    name: 'Dashboard',
    Icon: HomeIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'dashboard:general',
        link: '/app/dashboard/general',
        name: 'Dashboard Geral',
        // Icon: BarChartIcon,
        access: 'default',
        disabled: false,
      },
    ],
  },
  {
    ident: 'tables',
    link: '/app/tables',
    name: 'Tabelas',
    Icon: TableChartIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'objects',
    link: '/app/objects',
    name: 'Objetos',
    Icon: WatchIcon,
    access: 'default',
    disabled: false,
  },
  {
    ident: 'process',
    // link: '/app/process',
    name: 'Processos',
    Icon: GraphicEqIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'process:cloning',
        // link: '/app/process',
        name: 'Clonagens',
        // Icon: GraphicEqIcon,
        access: 'default',
        disabled: false,
        items: [
          {
            ident: 'process:clpostgres',
            link: '/app/process/clone-postgres',
            name: 'Clones PostgreSQL',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: false,
          },
          {
            ident: 'process:cloracle',
            link: '/app/process/clone-oracle',
            name: 'Clones Oracle',
            // Icon: GraphicEqIcon,
            access: 'default',
            disabled: true,
          },
        ],
      },
      {
        ident: 'process:dumpora',
        link: '/app/process/dumps-ora',
        name: 'Dumps Oracle',
        // Icon: GraphicEqIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'teams',
    // link: '/app/teams',
    name: 'Equipes',
    Icon: GroupIcon,
    access: 'default',
    disabled: false,
    items: [
      {
        ident: 'teams:abscal',
        link: '/app/teams/absent-calendar',
        name: 'Calendário de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absres',
        link: '/app/teams/absent-resume',
        name: 'Resumo de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: false,
      },
      {
        ident: 'teams:absadm',
        link: '/app/teams/absent-admin',
        name: 'Admin. de Ausências',
        // Icon: GroupIcon,
        access: 'default',
        disabled: true,
      },
    ],
  },
  {
    ident: 'admin',
    // link: '/admin',
    name: 'Administração',
    Icon: BusinessCenterIcon,
    access: 'admin',
    disabled: false,
    items: [
      {
        ident: 'config',
        link: '/admin/config',
        name: 'Configurações',
        // Icon: AssignmentIndIcon,
        access: 'admin',
        disabled: true,
      },
      {
        ident: 'profile',
        link: '/user/profile',
        name: 'Perfil de Usuário',
        // Icon: AssignmentIndIcon,
        access: 'default',
        disabled: false,
      },
    ],
  },
];
