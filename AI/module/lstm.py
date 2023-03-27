from keras.models import Sequential
from keras.layers import Dense, LSTM, Dropout, BatchNormalization
from keras.callbacks import ModelCheckpoint

# LSTM 모델 생성
def create_lstm_model(default=3, sr=16000, feature_size = 20):
    model = Sequential()
    model.add(LSTM(512, input_shape=(None, feature_size), return_sequences=True))
    model.add(BatchNormalization())
    model.add(Dropout(0.2))      

    model.add(LSTM(256, return_sequences=True))
    model.add(Dropout(0.2))

    model.add(LSTM(256, return_sequences=True))
    model.add(BatchNormalization())
    model.add(Dropout(0.1))
    
    model.add(LSTM(128, return_sequences=True))
    model.add(Dropout(0.2))
    
    model.add(LSTM(64))
    model.add(Dense(64,activation='relu'))
    model.add(Dense(default, activation='softmax'))
    return model

def Checkpoint(filepath):
    return ModelCheckpoint(filepath,save_weights_only=True, 
                            save_best_only=True, 
                            monitor='val_loss', 
                            verbose=1)