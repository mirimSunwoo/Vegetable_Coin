from os import link
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

price_file = open("price.txt","w", encoding="UTF-8-sig")

def linkgetFunction(name, link):
    driver.get(link)
    # driver.implicitly_wait(3)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    # 값 변환 코드
    notices = soup.select('#con01 > div.scroll-contents-wrap > div > div > table > tbody > tr > td:nth-child(4)')
    string = str(notices)
    price_string = string[60:70]
    re_string = price_string.replace(',','')
    name = name.strip()
    re_string = re_string.strip()
    price_file.write(name+':'+re_string+'\n')
    # price_file.close()
    return print(name, re_string)

# 오이 양파 감자 고구마 당근 콩나물 토마토 무 상추 시금치
오이 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0110&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
양파 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0100&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
감자 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0010&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
고구마 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0020&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
당근 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0040&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
콩나물 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0120&area_cd=101&itemsub_cd=0030&to_yyyymm=&from_yyyymm=&board=0'
토마토 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0130&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
무 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0170&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
상추 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0080&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'
시금치 = 'https://www.kprc.or.kr/consumerMain.do?lcla_cd=0759&mcla_cd=10&page=1&page_sz=10&board_id=use08&itemst_cd=0759&item_cd=0090&area_cd=101&itemsub_cd=0010&to_yyyymm=&from_yyyymm=&board=0'

# 함수불러오기
print(linkgetFunction('오이', 오이))
print(linkgetFunction('양파', 양파))
print(linkgetFunction('감자', 감자))
print(linkgetFunction('고구마', 고구마))
print(linkgetFunction('당근', 당근))
print(linkgetFunction('콩나물', 콩나물))
print(linkgetFunction('토마토', 토마토))
print(linkgetFunction('무', 무))
print(linkgetFunction('상추', 상추))
print(linkgetFunction('시금치', 시금치))

