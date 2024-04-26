const { test, expect } = require('@playwright/test');

// Mô tả kịch bản kiểm thử
test.describe('Kiểm thử tự động trang web thương mại điện tử', () => {
  
  // Mô tả bước kiểm thử
  test('Đăng nhập và thực hiện một số thao tác', async ({ page }) => {
    
    // Mở trang web
    await page.goto('https://canvas.phenikaa-uni.edu.vn/login/canvas');
    
    // Điền form
    await page.fill('input[name="pseudonym_session[unique_id]"]', '21011596@st.phenikaa-uni.edu.vn');
    await page.fill('input[name="pseudonym_session[password]"]', 'ducquan21280305');
    await page.click('button[type="submit"]');
    
    // Thực hiện các thao tác khác
    await page.waitForSelector('.ic-app'); // Chờ cho phần tử sản phẩm xuất hiện
    
    // click button vào menu
    await page.click('.ic-app-header__menu-list-link');
    
    // click button vào lớp
    await page.click('//*[@id="global_nav_courses_link"]');
    
    await page.click('//*[@id="global_nav_calendar_link"]');

    await page.click('//*[@id="global_nav_conversations_link"]');

    await page.click('//*[@id="global_nav_dashboard_link"]');
  });
});