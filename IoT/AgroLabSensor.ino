#include <DHT.h>
#include <DHT_U.h>

#define DHTTYPE DHT11   // Define o tipo de sensor DHT
#define DHTPIN 2        // Pino de dados do sensor DHT11

DHT_Unified dht(DHTPIN, DHTTYPE);
uint32_t delayMS = 9000;

#define AnalogLDR A0
#define Limiar 1.5
int Leitura = 0;
float VoltageLDR;

int sensorUmidadeSolo = A1;
int valorLimiteUmidade = 500;
bool soloUmido;

void setup() {
  pinMode(sensorUmidadeSolo, INPUT);
  Serial.begin(9600);
  dht.begin();
  Serial.println("Usando o Sensor DHT");
  delay(100);
}

void SensorDeUmidade() {
  int valorSensorUmidadeSolo = analogRead(sensorUmidadeSolo);
  Serial.print("Sensor de umidade do solo = ");
  Serial.print(valorSensorUmidadeSolo);
  
  if (valorSensorUmidadeSolo < valorLimiteUmidade) {
    Serial.println(" => O solo está úmido");
    soloUmido = true;
  } else {
    Serial.println(" => O solo está seco");
    soloUmido = false;
  }
}

void loop() {
  // Controle de umidade de solo
  SensorDeUmidade();
  delay(delayMS);

  // Sensor LDR
  Leitura = analogRead(AnalogLDR);
  VoltageLDR = Leitura * (2.0 / 1024);
  Serial.print("Leitura sensor LDR = ");
  Serial.println(VoltageLDR);

  if (VoltageLDR > Limiar) {
    Serial.println("Ligado");
  } else {
    Serial.println("Desligado");
  }
  delay(500);

  // Sensor DHT11
  sensors_event_t event;
  
  // Leitura da temperatura
  dht.temperature().getEvent(&event);
  if (isnan(event.temperature)) {
    Serial.println("Erro na leitura da Temperatura!");
  } else {
    Serial.print("Temperatura: ");
    Serial.print(event.temperature);
    Serial.println(" *C");
  }
  
  // Leitura da umidade
  dht.humidity().getEvent(&event);
  if (isnan(event.relative_humidity)) {
    Serial.println("Erro na leitura da Umidade!");
  } else {
    Serial.print("Umidade: ");
    Serial.print(event.relative_humidity);
    Serial.println("%");
  }
}
