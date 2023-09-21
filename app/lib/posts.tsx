import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'blogposts')
export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        const matterResult = matter(fileContents);
        const blogPosts: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date 
        }
        return blogPosts;
    })
    return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}