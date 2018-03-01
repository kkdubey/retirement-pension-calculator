import { browser } from 'protractor';
import { RetirementPensionExperienceCalculatorPage } from './app.po';

describe('Retirement pension experience calculator App', () => {
  let page: RetirementPensionExperienceCalculatorPage;

  beforeEach(() => {
    page = new RetirementPensionExperienceCalculatorPage();
  });

  it('should display the expanded navbar for high resolutions', () => {
    browser.manage().window().setSize(1024, 768);
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('Register');
    expect(page.getNavbarElement(2)).toEqual('Login');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });
});
