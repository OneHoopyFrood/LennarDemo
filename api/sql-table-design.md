Were I to save this in a RDBMS, I would use the following SQL table design:

```sql
CREATE TABLE IF NOT EXISTS `lead` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

We'd want to collect the username, but with this design I believe the business
model would be to follow-up with the user and get them signed up for a trial.
I've seen this down with very small businesses only. A more robust solution
would require a full user account system, which would be much more complex and
would tie into billing systems and access control.
