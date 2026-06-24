CREATE TABLE Accounts (
    acc_id NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    acc_type VARCHAR2(20),
    balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (1, 'Alice', 'SAVINGS', 5000);
INSERT INTO Accounts VALUES (2, 'Bob', 'SAVINGS', 3000);
INSERT INTO Accounts VALUES (3, 'Charlie', 'CURRENT', 7000);
COMMIT;

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_src_account IN NUMBER,
    p_dest_account IN NUMBER,
    p_amt IN NUMBER
) IS
    v_src_balance NUMBER;
BEGIN
    SELECT balance INTO v_src_balance
    FROM Accounts
    WHERE acc_id = p_src_account;

    IF v_src_balance < p_amt THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
    END IF;

    UPDATE Accounts
    SET balance = balance - p_amt
    WHERE acc_id = p_src_account;

    UPDATE Accounts
    SET balance = balance + p_amt
    WHERE acc_id = p_dest_account;

    DBMS_OUTPUT.PUT_LINE('Transferred ₹' || p_amt || 
                         ' from Account ID ' || p_src_account || 
                         ' to Account ID ' || p_dest_account || '.');

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 1000); 
END;
/