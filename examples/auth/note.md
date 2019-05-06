register:

* have a min... but avoid max, character types
* check if username is exists - sensitive / insensitive
	* case insensitive
* if name doesn't already exist	
* generate a salt
* add that salt to password
* hash the salt + password combo
* store username, hash, and salt
	* sometimes hash and salt are combined (bcrypt)

login

* hash the password + salt (we have to get the salt from somewhere, which is why it should be saved on register along with password hash and username)
* check if hash and username exist in database
* add something to session / genereate session id


authentication - proving you are who you are
salt - extra info to add to the password prior to hashing

* add their session id
* time
* randomly generated

* password
* third party - facebook, google, github
* 2-factor auth (something you know + something you have)




1. last class of new stuff - https/ssl/tls, authentication
	* if we finish material, we can start review
2. review ... ask abt topics
3. out-of-class review

1. do better on 2nd exam than 1st (by 10%), weights shifted
2. half of final project grades are done
	* if you've submitted a form, and site is not running (yet code seems deployable)
	* i'll send you a note to restart
3. 6 and 7 outstanding as well as homework support requests
