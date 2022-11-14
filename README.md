# Point of Sale

### System Design
Categories (CRUD):
- Coffee
- Milk
- Juice
- Bread
- Lunch
- Edit Category (Admin)
  -- attr: id, name, icon

Items:
- Hot Coffee
- Hot Milk
- Add/Edit Item
  -- attr: id, name, photo, price, stock
  
Report:
  - Stock per Item (per Category)
  - Date Range - all sales
    - most sales
    - least sales
    
Admin:
  - all create/add data required admin password - once (encrypted in local storage)
  - expired every 1 hour
  
