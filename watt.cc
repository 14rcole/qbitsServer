#include <map>
#include <string>
#include <iostream>
using namespace std;

int calcWattUse(bool occupied,string zone,string time) {
  int wattUsage;
  map <string,int> zoneLight;
  zoneLight["?"]=4;
  zoneLight["Brett"]=2;
  zoneLight["Bull/Howe"]=3;
  zoneLight["Engineering Applications Area"]=1;
  zoneLight["Engineering Applications Corner Area"]=4;
  zoneLight["HWQS"]=2;
  zoneLight["Malarkey"]=3;
  zoneLight["North Open Office"]=2;
  zoneLight["Quantum Developers"]=1;
  zoneLight["Salmon 2 TV"]=1;
  zoneLight["Yellow 2B"]=3;
  zoneLight["Yellow 2C"]=3;
  if(occupied) {
    int wattUsage=60*(zoneLight.find(zone)->second);
    return wattUsage;
  }
  else {
    int wattUsage=0;
    return wattUsage;
  }
  
}

int main() {
  bool occupied=true;
  string zone="Yellow 2B";
  string time;
  calcWattUse(occupied,zone,time);
  return 0;
}

  
