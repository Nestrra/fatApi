export interface NavItems {
    name: string,
    path: string

}

export const navsItems:NavItems[] = [
    {
        name: 'Tienda',
        path: '/inicio'
    },
    {
        name: 'Administrar Productos',
        path: '/administrar-productos'
    },
    {
        name: 'Mis compras',
        path: '/Mis-compras'
    },
    {
        name: 'Cerrar sesión',
        path: '/Logout'
    }


]