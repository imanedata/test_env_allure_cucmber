import {Then } from '@cucumber/cucumber';
import CreatePost from '../pages/CreatePost';
import DashboardPage from '../pages/Dashboard'; 
import PostUtils from '../utils/PostUtils';

let dashboardPage: DashboardPage;
let createPost: CreatePost;

Then('je vois mon super post dans la liste des posts', async function () {
    dashboardPage = new DashboardPage(this.page); 
    const titre = PostUtils.getTitreAvecRandom(); 
    await dashboardPage.page.getByRole('cell', { name: titre }).isVisible;    
});
