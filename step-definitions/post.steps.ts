import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import CreatePost from '../pages/CreatePost';
import DashboardPage from '../pages/Dashboard'; 
import PostUtils from '../utils/PostUtils';

let dashboardPage: DashboardPage;
let createPost: CreatePost;
let titreAvecRandom = "";

const randomSuffix = Math.floor(Math.random() * 10000); 
Then('je creer un post avec {string} et {string} et je clique sur le bouton save', async function (title: string, content: string) {
    
    createPost = new CreatePost(this.page); 
    if(title != ""){
        PostUtils.setTitreAvecRandom(titreAvecRandom);
    }
    await createPost.createPost(titreAvecRandom, content);
});

// Then('je vois mon super post dans la liste des posts', async function () {
//     dashboardPage = new DashboardPage(this.page); 
//     const titre = PostUtils.getTitreAvecRandom(); 
//     await dashboardPage.page.getByRole('cell', { name: titre }).isVisible;    
// });

Then('un message derreur saffiche', async function () {
    const errorMessage = await createPost.getErrorMessage();
    expect(errorMessage).toContain("Please correct");
 });