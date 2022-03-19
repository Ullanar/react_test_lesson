import React, {memo} from "react";
import classes from './mainPage.module.css'

const MainPage = () => {
    return (
        <div className={classes.mainPageWrapper}>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>

           <div className={classes.taskCard}>
               <div>Title</div>
               <div>Description</div>
               <div>Deadline</div>
           </div>
        </div>
    )
}

export default memo(MainPage)