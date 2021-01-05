# GitHub User Search Web-App for Omedia Internship

This project was made as an assessment task for Omedia internship challenge.

## Available Scripts

Download or clone the repo, to install all the dependencies run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Other regular React scripts like npm test, run build and run eject will also work.

###

# App is following following guidlines:

URL format: `http://domain`
— Should load a list view that could be switched to grid view with most popular
users according to GitHub.
○ Should have toggle button for list and grid views.
— For each user it should display following:
○ Avatar
○ Name which should be link redirecting to User page
○ Type
○ Three first repo names for the user if none then empty info text
— Should have search box to find specific user, if you search for a specific user
application redirects the user page.
— Should show 3 latest searches committed by search box (would be nice if they
are still available after page reload).
User page
URL format: `http://domain/:username`
— Back link to Landing page.
— Should display detailed user information enduser was searching on Landing
page or typed to the URL.
— Should also have possibility to access without Landing page search (work with
page reload).
○ If no user found it should display **Not found** content and button
which would redirect back to Landing page.
— Should display following:
○ Avatar
○ Name which open new tab in browser for user page in GitHub
○ Type
○ Three first repo names for the user if none then empty info text
— Organizations user belongs:
○ Organization avatar.
○ Organization login which is link that opens organizations page in GitHub
within new browser tab.
— If no organizations then info text is displayed.
