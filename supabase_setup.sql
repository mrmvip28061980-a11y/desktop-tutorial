-- Run this entire script in Supabase Dashboard > SQL Editor.
create table if not exists public.orders (
  code text primary key,
  status text not null default 'new' check (status in ('new','accepted','rejected')),
  order_data jsonb not null,
  created_at timestamptz not null default now()
);
alter table public.orders enable row level security;
grant insert on public.orders to anon;
grant select, update, delete on public.orders to authenticated;

drop policy if exists "Public can submit new orders" on public.orders;
create policy "Public can submit new orders" on public.orders
  for insert to anon
  with check (status = 'new' and jsonb_typeof(order_data) = 'object' and order_data ? 'customer' and order_data ? 'items');

drop policy if exists "Admins can read orders" on public.orders;
create policy "Admins can read orders" on public.orders
  for select to authenticated using (true);

drop policy if exists "Admins can update order status" on public.orders;
create policy "Admins can update order status" on public.orders
  for update to authenticated using (true) with check (status in ('new','accepted','rejected'));

drop policy if exists "Admins can delete orders" on public.orders;
create policy "Admins can delete orders" on public.orders
  for delete to authenticated using (true);
