CREATE TABLE Employees (
  emp_id NUMBER PRIMARY KEY,
  emp_name VARCHAR2(100),
  dept VARCHAR2(50),
  salary NUMBER(10, 2)
);
/

INSERT INTO Employees VALUES (1, 'Ram', 'Admin', 32000);
INSERT INTO Employees VALUES (2, 'Paul', 'Admin', 36000);
INSERT INTO Employees VALUES (3, 'Sai', 'Tech', 45000);
INSERT INTO Employees VALUES (4, 'Pardh', 'Tech', 47000);
COMMIT;
/

CREATE OR REPLACE PROCEDURE ApplyDeptBonus (
  p_dept_name IN VARCHAR2,
  p_bonus_percent IN NUMBER
) IS
  v_updated_count NUMBER;
BEGIN
  UPDATE Employees
  SET salary = salary + (salary * p_bonus_percent / 100)
  WHERE dept = p_dept_name;

  v_updated_count := SQL%ROWCOUNT;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || v_updated_count || 
                       ' employee(s) in ' || p_dept_name || 
                       ' dept (' || p_bonus_percent || '%).');

  COMMIT;
END;
/

BEGIN
  ApplyDeptBonus('Admin', 10);
END;
/