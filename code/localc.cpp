#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <windows.h>

using namespace std;

string ExePath();

int main ( int argc, char* argv[] )
{
	string path, infile, outfile;
	if (argc>=3)
	{
		infile = argv[1];
		outfile = argv[2];
        path = ExePath();

        cout<<path;

	}
	else
	{
		cout<<"\nNot enough Arguments";
	}

	return 0;
}

string ExePath() {
    char buffer[MAX_PATH];
    GetModuleFileName( NULL, buffer, MAX_PATH );
    string::size_type pos = string( buffer ).find_last_of( "\\/" );
    return string( buffer ).substr( 0, pos);
}
