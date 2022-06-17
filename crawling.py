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

# driver.implicitly_wait(3)
# driver.get('https://nid.naver.com/nidlogin.login')
# driver.find_element_by_name('id').send_keys('naver_id')
# driver.find_element_by_name('pw').send_keys('mypassword1234')
# driver.find_element_by_xpath('//*[@id="frmNIDLogin"]/fieldset/input').click()
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

# driver.get('https://order.pay.naver.com/home') ## Naver 페이 들어가기
# html = driver.page_source ## 페이지의 elements모두 가져오기
# soup = BeautifulSoup(html, 'html.parser') ## BeautifulSoup사용하기
# notices = soup.select('div.p_inr > div.p_info > a > span')

# for n in notices:
#     print(n.text.strip())


#2차시도
# options = webdriver.ChromeOptions()
# options.add_argument('window-size=1920,1080')

# driver = webdriver.Chrome('chromedriver', options=options)
# driver.implicitly_wait(5)

# driver.get(url='https://www.google.com/')

# search_box = driver.find_element_by_xpath('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input')

# search_box.send_keys('greeksharifa.github.io')
# search_box.send_keys(Keys.RETURN)

# elements = driver.find_elements_by_xpath('//*[@id="rso"]/div[*]/div/div[1]/a/h3/span')

# for element in elements:
#     print(element.text)
#     print(element.text, file=open('gorio.txt', 'w', encoding='utf-8'))

# sleep(3)
# driver.close()