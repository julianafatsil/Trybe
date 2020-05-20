#!/bin/bash

FILE="/media/dell/DATA/TRYBE/Git/ProjetosTrybe/my-shell-scripts"
if [ -e "$FILE" ]
	then
		echo "O caminho $FILE esta habilitado!"
fi
if [ -w "$FILE" ]
	then
		echo "Você tem permissão para editar $FILE"
	else
		echo "Você NÂO foi atorizado a editar $FILE"
fi
