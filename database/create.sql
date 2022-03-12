create schema blogs;

create table post(
    id serial primary key,
    title text not null,
    content text not null,
    createdAt timestamp default now()
)

insert into blog.post (title , content) values ('REST API: O que é?' , '...')