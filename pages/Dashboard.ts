import { Page } from 'playwright';

class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    elements = {
        CreatepostButton: () => this.page.locator('a:has-text("Add")'),
        postList: () => this.page.locator('.actionlist'), 
        postLinks: () => this.page.locator('.field-title a'), 
    };

    async clickCreatePostButton() {
        await this.elements.CreatepostButton().click();
    }

    async isPostVisible(title: string): Promise<boolean> {
        const postLinks = this.elements.postLinks();
        const postCount = await postLinks.count();
    
        console.log(`Nombre de posts trouvés : ${postCount}`);
    
        for (let i = 0; i < postCount; i++) {
            const postTitle = await postLinks.nth(i).innerText();
            console.log(`Titre du post ${i + 1} : ${postTitle}`);
            if (postTitle.includes(title)) {
                console.log(`Post trouvé : ${postTitle}`);
                return true;
            }
        }
    
        console.log('Post non trouvé');
        return false;
    }
    
}

export default DashboardPage;
