    import React from 'react'
    import { AppSidebar } from './components/appSidebar'
    import { Outlet } from 'react-router-dom'
    import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

    const Layout = () => {
    return (
        <>
        <SidebarProvider>
        <AppSidebar />
        <main className = "w-full">  
            <SidebarTrigger />
            <Outlet/>
        </main>
        </SidebarProvider>
        </>
    )
    }

    export default Layout