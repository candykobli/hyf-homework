select  * from task 
select *  from `user`
select * from user_task 
-- all the tasks assigned to users whose email ends in @spotify.com
select task.title from ((task 
inner join user_task  on task.id = user_task.task_id )
inner join `user` on user_task.user_id=user.id)
where user.email like '%@spotify.com';
-- all the tasks for 'Donald Duck' with status 'Not started'
select task.title, status.name from (((task 
inner join user_task  on task.id = user_task.task_id )
inner join `user` on user_task.user_id=user.id)
inner join status on task.status_id =status.id) 
where user.name = 'Donald Duck' and status.name ='Not started';
-- all the tasks for 'Maryrose Meadows' that were created in september 
select task.title, task.created from ((task 
inner join user_task  on task.id = user_task.task_id )
inner join `user` on user_task.user_id=user.id) 
where user.name = 'Maryrose Meadows' and month(task.created) = 9;
-- how many tasks where created in each month
select monthname(task.created),count(task.id) from task group by monthname (task.created)
