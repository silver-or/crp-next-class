import { Footer, Header, Nav, Pagination, Table, Modal } from '@/components'
import style from "@/styles/Layout.module.css";

export function Layout({ children }){
  return (<div className={style.container}>
        <main className={style.main}>{children}</main>
        <Table/>        
        <Pagination/>
        <Modal/>
      </div>
  );
}