CREATE TABLE Accounts (
    acc_id NUMBER PRIMARY KEY,
    acc_holder VARCHAR2(100),
    acc_type VARCHAR2(20),
    balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (1, 'Ram', 'SAVINGS', 3000);
INSERT INTO Accounts VALUES (2, 'Paul', 'SAVINGS', 8000);
INSERT INTO Accounts VALUES (3, 'Sai', 'CURRENT', 7000);
COMMIT;


SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    v_updated_rows NUMBER;
BEGIN
    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE acc_type = 'SAVINGS';

    v_updated_rows := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE(v_updated_rows || ' savings account(s) updated with 1% interest.');

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/
drop table Accounts;