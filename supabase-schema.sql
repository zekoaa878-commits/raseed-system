
-- انسخ هذا الكود في Supabase SQL Editor
-- قاعدة بيانات حقيقية مربوطة للكمبيوتر والموبايل

create table companies (id uuid primary key default gen_random_uuid(), name text, name_en text, logo text, created_at timestamp default now());
create table users (id uuid primary key default gen_random_uuid(), company_id uuid references companies(id), email text unique, password text, name text, role text default 'admin');
create table customers (id uuid primary key default gen_random_uuid(), company_id uuid references companies(id), name text, phone text, balance numeric default 0);
create table products (id uuid primary key default gen_random_uuid(), company_id uuid references companies(id), name text, qty integer default 0, price numeric, barcode text);
create table sales (id uuid primary key default gen_random_uuid(), company_id uuid references companies(id), invoice_no text, customer_id uuid references customers(id), total numeric, created_at timestamp default now());
create table expenses (id uuid primary key default gen_random_uuid(), company_id uuid references companies(id), description text, amount numeric, type text, created_at timestamp default now());

-- بيانات تجريبية
insert into companies (name) values ('شركتي');
insert into users (email, password, name) values ('admin@raseed.com', '123456', 'أحمد محمد');

-- تفعيل Realtime عشان الكمبيوتر والموبايل يتزامنوا لحظيا
alter publication supabase_realtime add table sales, products, expenses;
