import React from 'react';
import styles from '../Paginator/Paginator.module.css'

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
        let page = [];

        for(let i = 1; i <= pagesCount; i++) {
            page.push(i);
        }

        return( 
            <div>
                {page.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick ={(e) => {props.onPageChange(p)}}    >{p}</span>
                })}
            </div>
    )
}

export default Paginator;