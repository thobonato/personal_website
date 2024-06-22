# Check if a commit message was provided
if [ -z "$1" ]
then
    echo "No commit message provided. Using default message 'changes'."
    COMMIT_MSG="changes"
else
    COMMIT_MSG=$1
fi

# Add all changes to the staging area
git add .

# Commit changes with the provided or default message
git commit -m "$COMMIT_MSG"

# Push changes to the main branch
git push -u origin main