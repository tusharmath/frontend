# -*- coding: utf-8 -*- 

import os
import re


def getCurrentVersion():
	file     = open("views/layout.jade","r")
	if file:
		content  = file.read()
		match    = re.search(r"/fe/static/css/screen.v\d+",content)
		if match:
			result   = match.group()
			version  = result.split("v",1)[1]
			file.close();
			return version

def renameWithNewVersion():
	new_version_number = str(getCurrentVersion())
	os.chdir(os.getcwd() + "/static/css")
	for file in os.listdir("."):
		if file.startswith("screen."): 
			os.rename(file,"screen.v" + new_version_number + ".css")

def changeLayoutFile():
	new_version_number = str(int(getCurrentVersion()) + 1)
	file     		   = open("views/layout.jade","r")
	if file:
		content  = file.read()
		res      = re.sub(r"screen.v\d+","screen.v" + new_version_number,content)
		file.close()
		file     = open("views/layout.jade","w")
		file.write(res)
		file.close()



if __name__ == "__main__":

	changeLayoutFile()
	renameWithNewVersion()