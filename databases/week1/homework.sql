select * from task
select count(title) from `task`;
select count(title) from `task` where due_date is null;
select title from task where updated <= due_date
select title from task where updated > due_date
select title from task where status_id=3;
SELECT * FROM task ORDER BY created desc ;
select title from task order by created desc limit 1;
select title, due_date from task where title like '%database%' or description like '%database%';
select status.id, task.title from task inner join status on task.status_id=status.id;
select status.name ,count(status_id) from task inner join status on task.status_id=status.id group by status_id;  
select status.name from task inner join status on task.status_id=status.id group by task.status_id order by count(task.status_id) desc
