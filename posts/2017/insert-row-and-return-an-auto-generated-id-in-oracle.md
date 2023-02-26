---
layout: post.njk
title: Insert Row and Return an Auto-Generated Id in Oracle
date: 2017-08-01
---

### Problem

Consider the following PL/SQL *create table* and *insert* statements:

```sql
CREATE TABLE person
(
    person_id number GENERATED BY DEFAULT ON NULL AS IDENTITY,
    person_name varchar2(255) NOT NULL,
    team_name varchar2(255) NOT NULL,
    CONSTRAINT person_pk PRIMARY KEY (person_id)
);

INSERT INTO person (person_name, team_name)
VALUES ('Marina', 'Ketchup');

INSERT INTO person (person_name, team_name)
VALUES ('Pearl', 'Mayo');
```

The primary key column *person_id* is generated automatically if no value is provided.
This is great for when the id column can be arbitrary, i.e. we don't particularly care what the value is as long as it's unique.

Pretend an application we are working on makes use of the above table.
Our application needs to insert a new row and then retrieve the primary key of the row inserted.
How could we go about doing this?

A first attempt could go like so:

1.  Make an insert statement within the app's code.
2.  Query the database for the row we just inserted using a combination of the column values inserted.
3.  Return the row's person_id.

This solution may be fine if we are sure that a column (or combination of columns) is guaranteed to be unique.
Such a guarantee may come in the form of a UNIQUE constraint in the table schema.
In this implementation though, no such guarantee exists.

For instance, we may want to insert a person with person_name 'Sheldon' and team_name 'Mustard'.
Oracle will assign an auto-generated id to our row.
When we want to retrieve the row however, we can only query based on the columns we have values for (person_name and team_name).
Fortunately in this case, the values we have are enough to identify the row we want.
This will not always be the case; therefore this implementation is broken.

### Solution

A better approach would be to return the auto-generated id right when the row is inserted into the table.
This would ensure we don't rely on the uniqueness of the other columns for our implementation to work.
Additionally, we don't need to do a comparison across one or more columns to find our row.

Here is how this can be done:

```sql
BEGIN
    INSERT INTO person (person_name, team_name)
    VALUES ('Pearl', 'Cake')
    RETURNING person_id into :return_value;
END;
```

The auto-generated id is stored in variable *return_value*.
Our app can retrieve this value by doing something like this:

```csharp
using (Oracle.DataAccess.Client.OracleCommand command = connection.CreateCommand())
{
    command.CommandText = @"BEGIN
                                INSERT INTO person (person_name, team_name)
                                VALUES ('Pearl', 'Ice cream')
                                RETURNING person_id into :return_value;
                            END;";
    command.Parameters.Add(new OracleParameter("return_value",
                                                Oracle.DataAccess.Client.OracleDbType.Int32,
                                                System.Data.ParameterDirection.ReturnValue));
    command.ExecuteNonQuery();
    return command.Parameters["return_value"].Value;
}
```

That's all for now!