# mah-webbutv.github.io

Site for online open educational resources (OOER)

> [mah-webbutv.github.io](http://mah-webbutv.github.io)

## Contribute

This site is made with [Jekyll](http://jekyllrb.com) and published with [GitHub Pages](https://pages.github.com/). Be sure to read up on both [Jekyll](http://jekyllrb.com) and [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages) before contributing.

To get started:

1. Clone this repository

    ```bash
    $ git clone https://github.com/mah-webbutv/mah-webbutv.github.io.git
    $ cd mah-webbutv.github.io
    ```

2. Install dependencies

    ```bash
    $ gem install bundle  # ignore if bundle is already installed
    $ bundle install
    ```

    ```bash
    $ npm install
    
    # Compile ES6 JavaScript
    $ webpack
    ```

3. Build & preview the site locally at `0.0.0.0:4000`

    ```bash
    bundle exec jekyll serve --watch
    ```

Now you're ready to start contributing!

### Workflow Example

```bash
# Create a new branch
git checkout -b fix#123
# edit, add or remove content...

# Add and commit changes with a message
git add .
git commit . -m "message"

# Checkout to master, fetch remote changes
git checkout master
git pull

# Merge your own changes into master then
# push them to GitHub
git merge fix#123
git push origin master

# Optionally remove your local branch afterwards
git branch -D fix#123
```

## Courses

Courses consists of a couple of files and directories:

* In `_data/` there is `courses.yml` (simple list of all available courses) and e.g. `da280a.yml` (course specific information and the menu)
* In `courses/` you will find a directory for each course with the corresponding files and directories listed in the course specific YAML file

## License

All content is available under a [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/legalcode) license. In most cases, this should be equal to the [generic version](http://creativecommons.org/licenses/by/4.0/). Attribution in the form of a link to <http://mah-webb.github.io/> is much appreciated.
