from posixpath import split
from telnetlib import Telnet
import selenium
from selenium import webdriver
from selenium.webdriver import ActionChains
from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from time import sleep

#1차시도
options = webdriver.ChromeOptions()
options.add_argument('headless')
    
options.add_argument("--start-maximized") # add
options.add_argument("--window-size=1920,1080") # add
    
driver = webdriver.Chrome('./chromedriver', options=options)

driver = webdriver.Chrome('chromedriver')

driver.get('https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0140&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0')
driver.implicitly_wait(3)
# driver.get_screenshot_as_file('korea_main.png')
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
notices = soup.select('#con01 > div.scroll-contents-wrap > div > div > table > tbody > tr > td:nth-child(4)')
string = str(notices)
price_string = string[60:70]
re_string = int(price_string.replace(',',''))
print(re_string)
# print(price_string)

