# Setup

After installing minikube, run the following command to set up a cluster.

```bash
minikube start --mount --mount-string=".:/minikube/" --nodes=3
```

> `--mount` ensures that local files can be mounted to the cluster.  
> `--mount-string` defines the source and destination directories.  
> `--nodes` specifies the number of nodes in the cluster. This includes the Master node.

Then run the commands below to start all resources.

```bash
kubectl apply -f mariadb.yaml
kubectl apply -f nodejs.yaml
kubectl apply -f lighttpd.yaml
```

> `-f <filename>` defines which file should be applied.

Lastly, run this last command to forward a port on your local machine to the `lighttpd-service-mm` service.

```bash
minikube service lighttpd-service-mm
```

The web page should now be opened automatically in your browser. 
If not, use the URL that was logged to the console window.

## Warning!

The Node modules required for the Node.js API are not included in this repository. 
It is recommended to run `npm install` in the `/api` directory before proceeding to start the deployments.
