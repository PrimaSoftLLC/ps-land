how to build image:
1. build project
    > ng build ps-land --prod

2. copy files from dockerfiles directory
3. paste to dist/ps-land
4. run docker

5. cd to the directory for example
    > cd C:\Users\User\projects\ps-land2\dist\ps-land
6. build image
    > docker image build -t cooll3r/ps-land .

7. docker push cooll3r/ps-land
