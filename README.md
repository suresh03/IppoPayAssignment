# IppoPayAssignment Password Validation part
**********************
1. A password is considered strong if the below conditions
are all met:
● It has at least 6 characters and at most 20 characters.
● It contains at least one lowercase letter, at least one
uppercase letter, and at least one digit.
● It does not contain three repeating characters in a row
(i.e., &quot;Baaabb0&quot; is weak, but &quot;Baaba0&quot; is strong).
Given a string password, return the minimum number of steps
required to make password strong. if password is already
strong, return 0.
